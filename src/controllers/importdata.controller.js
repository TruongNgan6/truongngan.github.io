import UserModel from "./../models/user.model.js";
import usersData from "./../../data/user.data.js";

const user = async (req, res) => {
    await UserModel.deleteMany({});
    const importedUsers = await UserModel.insertMany(usersData);
    res.send({
        success: true,
        status_code: 200,
        data: { importedUsers },
        infor: "Import Sample User Data"
    });
};

const ImportDataController = {
    user
};

export default ImportDataController;
