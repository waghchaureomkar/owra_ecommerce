import app from "../../app";
import { login_port } from "../../configs/globalConfig";




app.listen(login_port, () => {
    console.log(`Login service started on port ${login_port}`);
});
