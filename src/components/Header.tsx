const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between">
        <img src="/assets/logo.png" alt="logo" className="w-28"/>
        <ul className="flex gap-16">
          <li><a href="" className="font-lobster text-darkText text-3xl">Home</a></li>
          <li><a href="" className="font-lobster text-darkText text-3xl">Product</a></li>
          <li><a href="" className="font-lobster text-darkText text-3xl">Contact</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header