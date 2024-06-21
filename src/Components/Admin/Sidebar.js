import 'react-pro-sidebar/dist/css/styles.css';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { DiReact } from "react-icons/di";
import { MdDashboard } from "react-icons/md";
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from '../../assets/images/bg2.jpg';
import './SideBar.scss';


const Sidebar = (props) => {
    const { image, collapsed, toggled, handleToggleSidebar } = props;
    return (
        <>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <DiReact size={'3em'} color={'00bfff'} />
                        TL Software
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<MdDashboard />}
                        >
                            Trang chủ
                        </MenuItem>
                        <MenuItem
                            icon={<MdDashboard />}
                        >
                            Nhân viên
                        </MenuItem>
                        <MenuItem
                            icon={<MdDashboard />}
                        >
                            Công việc
                        </MenuItem>
                        <MenuItem
                            icon={<MdDashboard />}
                        >
                            Bảng lương
                        </MenuItem>
                        <MenuItem
                            icon={<MdDashboard />}
                        >
                            Bảng chấm công
                        </MenuItem>
                        <MenuItem
                            icon={<MdDashboard />}
                        >
                            Dự án
                        </MenuItem>
                        <MenuItem
                            icon={<MdDashboard />}
                        >
                            Nghỉ việc
                        </MenuItem>
                        <MenuItem
                            icon={<MdDashboard />}
                        >
                            Khen thưởng
                        </MenuItem>
                        <MenuItem
                            icon={<MdDashboard />}
                        >
                            Sự cố
                        </MenuItem>
                        <MenuItem
                            icon={<MdDashboard />}
                        >
                            Báo cáo
                        </MenuItem>
                    </Menu>

                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/TuanLinh54"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                Tuấn Linh
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    )
}

export default Sidebar;