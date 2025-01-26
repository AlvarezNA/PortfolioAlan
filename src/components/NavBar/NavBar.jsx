import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, withRouter } from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menuOpen:false
        };
    }    
    handleStateChange = (state) => {
        this.setState({
            menuOpen: state.isOpen
        })
    }
    closeMenu = () => {
        this.setState({
            menuOpen: false
        })
    }
    render() {
        const { location } = this.props;
        const path = location.pathname;
        return (
            <Menu 
                isOpen={this.state.menuOpen}
                onStateChange={(state)=>this.handleStateChange(state)}
            >
                <Link to='/' onClick ={()=>this.closeMenu()}
                    className={`menu-item ${path === '/' ? 'active-item' : ''}`}>
                   Inicio
                </Link>
                <Link to='/about' onClick ={()=>this.closeMenu()}
                    className={`menu-item ${path === '/Sobre Mi' ? 'active-item' : ''}`}>
                    Sobre mi
                </Link>
                <Link to='/projects' onClick ={()=>this.closeMenu()}
                    className={`menu-item ${path === '/Proyectos' ? 'active-item' : ''}`}>
                    Proyectos
                </Link>
                <Link to='/skills' onClick ={()=>this.closeMenu()} 
                    className={`menu-item ${path === '/skills' ? 'active-item' : ''}`}>
                    Skills
                </Link>
                <Link to='/contact' onClick ={()=>this.closeMenu()} 
                    className={`menu-item ${path === '/contacto' ? 'active-item' : ''}`}>
                    Contacto
                </Link>
            </Menu>
        );
    }
}

export default withRouter(NavBar);