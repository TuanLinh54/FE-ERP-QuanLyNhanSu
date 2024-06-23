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
import { MdDashboard, MdWorkOutline, MdOutlineWorkOff, MdOutlineSettings } from "react-icons/md";
import { TbReportMoney, TbReportAnalytics } from "react-icons/tb";
import { FaGem, FaList, FaGithub, FaHeart, FaRegUser, FaRegCalendarCheck, FaProjectDiagram, FaAward } from 'react-icons/fa';
import sidebarBg from '../../assets/images/bg2.jpg';
import './SideBar.scss';
import { Link } from 'react-router-dom';


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
                            <Link to='/admin' />
                        </MenuItem>
                        <MenuItem
                            icon={<FaRegUser />}
                        >
                            Nhân viên
                            <Link to='/admin/manage-users' />
                        </MenuItem>
                        <MenuItem
                            icon={<MdWorkOutline />}
                        >
                            Công việc
                        </MenuItem>
                        <MenuItem
                            icon={<TbReportMoney />}
                        >
                            Bảng lương
                        </MenuItem>
                        <MenuItem
                            icon={<FaRegCalendarCheck />}
                        >
                            Bảng chấm công
                        </MenuItem>
                        <MenuItem
                            icon={<FaProjectDiagram />}
                        >
                            Dự án
                        </MenuItem>
                        <MenuItem
                            icon={<MdOutlineWorkOff />}
                        >
                            Nghỉ việc
                        </MenuItem>
                        <MenuItem
                            icon={<FaAward />}
                        >
                            Khen thưởng
                        </MenuItem>
                        <MenuItem
                            icon={<TbReportAnalytics />}
                        >
                            Báo cáo
                        </MenuItem>
                        <MenuItem
                            icon={<MdOutlineSettings />}
                        >
                            Thiết lập
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