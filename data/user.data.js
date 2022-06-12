import bycrypt from "bcryptjs";

const usersData = [
    {
        firstName: "Lộc",
        lastName: "Trịnh Đ.",
        email: "loc.trinh@itclub.google.com",
        password: bycrypt.hashSync("123456", 10)
    },
    {
        firstName: "Bảoo",
        lastName: "Trần Q.",
        email: "bao.tran@itclub.google.com",
        password: bycrypt.hashSync("123456", 10)
    },
    {
        firstName: "Anh",
        lastName: "Phạm H.",
        email: "anh.pham@itclub.google.com",
        password: bycrypt.hashSync("123456", 10)
    }
];

export default usersData;
