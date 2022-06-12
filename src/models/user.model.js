import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import mongooseSequence from "mongoose-sequence";

const AutoIncrement = mongooseSequence(mongoose);

const UserSchema = new mongoose.Schema(
    {
        idInc: {
            type: Number,
            required: false,
            default: 0
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        collection: "User"
    }
);

// Register handle method
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    console.log("aloloooooooooo");
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Add plugin
UserSchema.plugin(AutoIncrement, { id: "User", disable_hooks: true, inc_field: "idInc" });
const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
