import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="app">
      <Profile 
      avatar="https://randomuser.me/api/portraits/men/18.jpg"
      name="Matheus Duarte" 
      bio="Dev em formação" 
      phone="+5511912345678" 
      email="matheus@gmail.com" 
      githubUrl="Github" 
      linkedinUrl="Linkedin" 
      twitterUrl="Twitter" />
    </div>
  )
}