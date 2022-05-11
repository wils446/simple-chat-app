import Express from "express";
import dotenv from "dotenv";

async function main() {
    dotenv.config({ path: ".env" });

    const app = Express();

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}

main();
