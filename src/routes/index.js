import ImportDataRoute from "./importdata.route.js";
import UserRoute from "./user.route.js";

const routes = (app) => {
    // setup routes
    app.use("/api/v1/user", UserRoute);

    // /
    app.use("/api/v1/importdata", ImportDataRoute);
    app.use("/api/v1", (req, res) => res.send("HA dApp Backend - From IT Club with ❤️"));
};

export default routes;
