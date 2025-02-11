import { Button, Input, notification } from "antd";
import axios from "axios";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";
const UserForm = () => {
    const [fullName, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const handleClickBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: "create user",
                description: "User created successfully",
            })
        }else {
            notification.error({
                message: "create user",
                description: JSON.stringify(res.message),
            })
        }

    }
    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>Full Name</span>
                    <Input value={fullName} onChange={(e) => { setFullname(e.target.value) }} />
                </div>
                <div>
                    <span>Email</span>
                    <Input value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                </div>
                <div>
                    <Button type="primary" onClick={handleClickBtn}> Create User </Button>
                </div>
            </div>
        </div>
    )
}
export default UserForm;