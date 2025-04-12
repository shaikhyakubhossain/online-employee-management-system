const { setModel, checkPassword, createPassword } = require("../utils/methods");
const bcrypt = require("bcrypt");

const changePassword = async (req, res) => {
    const { oldPassword, newPassword, confirmPassword, role } = req.body;
    console.log(oldPassword, newPassword, confirmPassword);

    if(role !== "admin" && role !== "employee") return res.status(401).json({ error: "You are not authorized" });
    if(!oldPassword || !newPassword || !confirmPassword) return res.status(400).json({ error: "All fields are required" });
    if(oldPassword.length < 6 || newPassword.length < 6 || confirmPassword.length < 6) return res.status(400).json({ error: "Password must be at least 6 characters long" });
    if(newPassword !== confirmPassword) return res.status(400).json({ error: "New password and confirm password does not match" });
    
    const user = await setModel(role).findById(req.user._id);
    if(!user) return res.status(400).json({ error: "User does not exist" });
    
    const isPasswordCorrect = await checkPassword(user.password, oldPassword);
    if(!isPasswordCorrect.success) return res.status(400).json({ error: isPasswordCorrect.error });
    
    if(oldPassword === newPassword) return res.status(400).json({ error: "Old password and new password cannot be same" });

    user.password = await createPassword(newPassword, confirmPassword);
    await user.save();

    res.status(200).json({ message: "Password changed successfully" });

    console.log(user)
};

module.exports = { changePassword };
