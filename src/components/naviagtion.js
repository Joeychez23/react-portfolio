const linkStyle = { border: '1px black', padding: '5px' };

const sectionStyle = {
    display: 'flex',
    fontFamily: 'helvetica',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
}



function pageLinks(props) {
    return (
        <nav className="main-header-menu text-center">
            <section style={sectionStyle}>
                <div style={linkStyle}>
                    <a className="hov-opc" href="#about" onClick={function () { props.setPage('about') }}>About</a>
                </div>
                <div style={linkStyle}>
                    <a  className="hov-opc" href="#portfolio" onClick={function () { props.setPage('portfolio') }}>Portfolio</a>
                </div><div style={linkStyle}>
                    <a className="hov-opc" href="#contact" onClick={function () { props.setPage('contact') }}>Contact</a>
                </div>
                <div style={linkStyle}>
                    <a className="hov-opc" href="#resume" onClick={function () { props.setPage('resume') }}>Resume</a>
                </div>
            </section>
        </nav>
    )
}

export default pageLinks