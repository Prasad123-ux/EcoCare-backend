const { DiseaseData } = require("../../Modules/disease");

const getDiseaseController = (req, res) => { 
    console.log(req.body);
    const color = req.body.color; // Expecting the color from the frontend request body
    console.log("Received color:", color);

    // Convert the received color to an array of RGB values
    const normalizeColor = (color) => {
        const rgbMatch = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (rgbMatch) {
            return [parseInt(rgbMatch[1]), parseInt(rgbMatch[2]), parseInt(rgbMatch[3])];
        }
        return null;
    };

    const normalizedColor = normalizeColor(color);

    if (!normalizedColor) {
        return res.status(400).json({
            success: false,
            message: "Invalid color format provided",
        });
    }

    // Search for diseases in the database that match the color
    DiseaseData.find()
        .exec()
        .then((diseases) => {
            // Filter diseases that have matching color
            const matchingDiseases = diseases.filter(disease => {
                // Check if any of the disease colors match the normalized color
                return disease.colors.some(diseaseColor => {
                    return JSON.stringify(diseaseColor) === JSON.stringify(normalizedColor);
                });
            });

            if (matchingDiseases.length > 0) {
                res.status(200).json({
                    success: true,
                    message: "Matching diseases fetched successfully",
                    data: matchingDiseases,
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
                error: err.message,
            });
        });
};

module.exports = { getDiseaseController };
