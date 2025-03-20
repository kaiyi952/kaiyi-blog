'use client'
import styles from "./nav.module.scss";


const SideNav = () => {

    const scroll2El = (elID: string): void => {
        const element = document.getElementById(elID);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth',
            });
        } else {
            console.error(`Element with ID "${elID}" not found.`);
        }
    };

    const onBtnClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        const target = e.currentTarget;
        const goto = target.getAttribute('data-goto');
        if (goto) {
            setTimeout(() => {
                scroll2El(goto);
            });
        } else {
            console.error('Goto attribute not found.');
        }
    };

    return (
        <div className={`fixed top-20 right-8 h-full text-[#2733f5] z-100 w-50 ${styles.sidebar} hidden md:inline-block`}>
            <div className="flex flex-col items-center space-y-4 py-6">
                {/* <h2 className="text-2xl font-bold">Kai Portfolio</h2> */}

                <button data-goto="home" onClick={onBtnClick} className=" p-2  text-center transform transition-all duration-300 hover:scale-110 active:scale-95">home</button>
                <button data-goto="about" onClick={onBtnClick} className=" p-2  text-center transform transition-all duration-300 hover:scale-110 active:scale-95">about</button>
                <button data-goto="tech" onClick={onBtnClick} className=" p-2  text-center transform transition-all duration-300 hover:scale-110 active:scale-95">tech</button>
                <button data-goto="experience" onClick={onBtnClick} className=" p-2  text-center transform transition-all duration-300 hover:scale-110 active:scale-95">experience</button>
                <button data-goto="projects" onClick={onBtnClick} className=" p-2  text-center transform transition-all duration-300 hover:scale-110 active:scale-95">projects</button>
                <button data-goto="trivia" onClick={onBtnClick} className=" p-2  text-center transform transition-all duration-300 hover:scale-110 active:scale-95">trivia</button>
            </div>
        </div >
    );
};

export default SideNav; 