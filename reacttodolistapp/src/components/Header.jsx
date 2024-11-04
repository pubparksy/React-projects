import "./Header.css"

const Header = () => {
  var dateOpt= { year: "numeric", month: "long", day: "numeric", weekday: "long"};
  var timeOpt= { hour: "numeric", minute: "numeric" };

  return (
    <div className="Header">
      <h2 className="Date">🗓️ {new Date().toLocaleDateString("ko-KR",dateOpt)}</h2>
      <h2 className="Time">{new Date().toLocaleTimeString("ko-KR",timeOpt)}</h2>
    </div>
  )
}

export default Header;