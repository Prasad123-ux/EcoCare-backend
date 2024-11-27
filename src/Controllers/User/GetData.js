const { DiseaseData } = require("../../Modules/disease");

const getDiseaseController = (req, res) => {
    const { color } = req.body; // Expecting the color from the frontend request body
    console.log("Received color:", color);

    // Convert the received color to lowercase for consistency
    const normalizedColor = color?.toLowerCase();

    if (!normalizedColor) {
        return res.status(400).json({
            success: false,
            message: "No color provided in the request",
        });
    }

    // Search for diseases in the database that match the color
    DiseaseData.find({ color: normalizedColor })
        .exec()
        .then((diseases) => {
            if (diseases && diseases.length > 0) {
                res.status(200).json({
                    success: true,
                    message: "Matching diseases fetched successfully",
                    data: diseases,
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: "No diseases found for the provided color",
                });
            }
        })
        .catch((err) => {
            console.error("Error fetching data:", err);
            res.status(500).json({
                success: false,
                message: "An error occurred while fetching data",
                error: err,
            });
        });
};

module.exports = { getDiseaseController };
