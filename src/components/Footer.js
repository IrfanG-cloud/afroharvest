// components/Footer.js

function Footer() {
    return (
      <footer className="bg-[#1c3f1d] text-white px-8 py-8 md:flex md:justify-between">
        <div>
          <h1 className="text-[15px]">Location</h1>
          <p className="text-[12px] pt-4">Burjuman Business Tower, office 908, Dubai, UAE</p>
        </div>
        <div className="text-center">
          <p className="text-[12px]">&copy; {new Date().getFullYear()} Afro Harvest. All rights reserved.</p>
        </div>
        <div>
          <h1 className="text-[15px]">Contact</h1>
          <p className="text-[12px] pt-4">+971-50-180-1570</p>
          <p className="text-[12px]">AfroHarvest@gmail.com</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  