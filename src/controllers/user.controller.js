// import UserModel

const index = (req, res) => {
    res.status(200).send({
        success: true,
        status_code: 200,
        data: {},
        infor: "User Route Index"
    });
};

const login = (req, res) => {
    res.status(200).send({
        success: true,
        status_code: 200,
        data: {},
        infor: "User Route Login"
    });
};
const signup = (req, res) => {
    res.status(200).send({
        success: true,
        status_code: 200,
        data: {},
        infor: "User Route Signup"
    });
};

const UserControler = {
    index,
    login,
    signup
};

export default UserControler;
