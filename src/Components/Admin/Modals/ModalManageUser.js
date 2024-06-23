import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";


const ModalCreateUser = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [address, setAddress] = useState("");
    const [dateofbirth, setDateofbirth] = useState("");
    const [gender, setGender] = useState("Nam");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("User");
    const [civilian, setCivilian] = useState("cvl1");
    const [department, setDepartment] = useState("IT");
    const [position, setPosition] = useState("Giám Đốc");
    const [joiningdate, setJoiningdate] = useState("");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0])
        } else {
            // setPreviewImage("")
        }
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                size='xl'
                backdrop='static'
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Thêm người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Họ</label>
                            <input
                                type="text"
                                className="form-control"
                                value={lastname}
                                onChange={(event) => setLastname(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Tên</label>
                            <input
                                type="text"
                                className="form-control"
                                value={firstname}
                                onChange={(event) => setFirstname(event.target.value)}
                            />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                value={address}
                                onChange={(event) => setAddress(event.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Ngày Sinh</label>
                            <input
                                type="date"
                                className="form-control"
                                value={dateofbirth}
                                onChange={(event) => setDateofbirth(event.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Giới tính</label>
                            <select className="form-select" onChange={(event) => setGender(event.target.value)}>
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Số điện thoại</label>
                            <input type="text" className="form-control"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select" onChange={(event) => setRole(event.target.value)}>
                                <option value="User">User</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Civilian</label>
                            <select className="form-select" onChange={(event) => setCivilian(event.target.value)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Phòng Ban</label>
                            <select className="form-select" onChange={(event) => setDepartment(event.target.value)}>
                                <option value="Phòng IT">Phòng IT</option>
                                <option value="Phòng kế toán">Phòng kế toán</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Chức vụ</label>
                            <select className="form-select" onChange={(event) => setPosition(event.target.value)}>
                                <option value="Giám Đốc">Giám Đốc</option>
                                <option value="Quản Lý">Quản Lý</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Ngày vào làm</label>
                            <input
                                type="date"
                                className="form-control"
                                value={joiningdate}
                                onChange={(event) => setJoiningdate(event.target.value)}
                            />
                        </div>
                        <div className='col-md-12'>
                            <label className='form-label label-upload' htmlFor='labelUpload'>
                                <FcPlus /> Ảnh đại diện
                            </label>
                            <input
                                type='file'
                                hidden
                                id='labelUpload'
                                onChange={(event) => handleUploadImage(event)}
                            />
                        </div>
                        <div className='col-md-12 img-preview' >
                            {previewImage
                                ?
                                <img src={previewImage} />
                                :
                                <span>Preview Image</span>
                            }
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser;