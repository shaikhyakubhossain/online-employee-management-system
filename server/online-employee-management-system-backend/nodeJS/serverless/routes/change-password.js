const { checkPassword, createPassword } = require("../utils/password-utils");
const { setModel } = require("../utils/methods");

const changePassword = async (req, res) => {
    const { oldPassword, newPassword, confirmPassword, role } = req.body;

    if(role !== "admin" && role !== "employee") return res.status(401).json({ error: "You are not authorized" });
    if(!oldPassword || !newPassword || !confirmPassword) return res.status(400).json({ error: "All fields are required" });
    
    const user = await setModel(role).findById(req.user._id);
    if(!user) return res.status(400).json({ error: "User does not exist" });
    
    const isPasswordCorrect = await checkPassword(user.password, oldPassword);
    if(!isPasswordCorrect.success) return res.status(400).json({ error: isPasswordCorrect.error });
    
    if(oldPassword === newPassword) return res.status(400).json({ error: "Old password and new password cannot be same" });

    const passwordCreation = await createPassword(newPassword, confirmPassword)
    if(passwordCreation.error) return res.status(400).json({ error: passwordCreation.error });

    user.password = passwordCreation;
    await user.save();

    res.status(200).json({ message: "Password changed successfully" });

};

module.exports = { changePassword };
