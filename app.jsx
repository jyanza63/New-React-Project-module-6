import ProfileCard from "./components/ProfileCard";
import SettingsForm from "./components/SettingsForm";
import Tabs from "./components/Tabs";

export default function App() {
  return (
    <div className="container">
      <div className="cover"></div>

      <div className="content">
        <ProfileCard />

        <div className="settings-box">
          <Tabs />
          <SettingsForm />
        </div>
      </div>
    </div>
  );
}
