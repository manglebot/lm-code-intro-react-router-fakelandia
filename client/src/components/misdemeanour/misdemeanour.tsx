import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type MisdemeanourProps = {
  citizenId: number;
  date: string;
  misdemeanour: string;
};

const emojiMap: Record<string, string> = {
  rudeness: " 🤪",
  lift: " 🗣",
  vegetables: " 🥗",
  united: " 😈",
};

const Misdemeanour: React.FC = () => {
  const [misdemeanours, setMisdemeanours] = useState<MisdemeanourProps[]>([]);
  const [selectedMisdemeanour, setSelectedMisdemeanour] = useState<string>("");
  const { confession } = useParams<{ confession: string }>();

  const confessionData = confession
    ? JSON.parse(decodeURIComponent(confession))
    : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/misdemeanours/10"
        );
        const data = await response.json();
        setMisdemeanours(data.misdemeanours);
      } catch (error) {
        // error code to follow
      }
    };

    fetchData();
  }, []);

  const handleMisdemeanourChange = (misdemeanour: string) => {
    setSelectedMisdemeanour(misdemeanour);
  };

  return (
    <div>
      <table className="misdemeanour__table" data-testid="misdemeanour">
        <thead>
          <tr>
            <th>Citizen ID</th>
            <th>Date</th>
            <th>
              <div className="dropdown">
                <button className="dropdown__button">Filter</button>
                <div className="dropdown__options">
                  <a
                    href="#"
                    className="dropdown__option"
                    onClick={() => handleMisdemeanourChange("rudeness")}
                  >
                    rudeness
                  </a>
                  <a
                    href="#"
                    className="dropdown__option"
                    onClick={() => handleMisdemeanourChange("lift")}
                  >
                    lift
                  </a>
                  <a
                    href="#"
                    className="dropdown__option"
                    onClick={() => handleMisdemeanourChange("vegetables")}
                  >
                    vegetables
                  </a>
                  <a
                    href="#"
                    className="dropdown__option"
                    onClick={() => handleMisdemeanourChange("united")}
                  >
                    united
                  </a>
                  <a
                    href="#"
                    className="dropdown__option"
                    onClick={() => handleMisdemeanourChange("")}
                  >
                    view all
                  </a>
                </div>
              </div>
              <p>Misdemeanour</p>
            </th>
            <th>Punishment Idea</th>
          </tr>
        </thead>
        <tbody>
          {confessionData && (
            <tr className="confession__data">
              <td>{confessionData.citizenId}</td>
              <td>{confessionData.date}</td>
              <td>
                {confessionData.misdemeanour}
                {emojiMap[confessionData.misdemeanour]}
              </td>
              <td>
                <img
                  src={`https://picsum.photos/140/70?random=${confessionData.citizenId}`}
                  alt={`Random ${confessionData.citizenId}`}
                />
              </td>
            </tr>
          )}
          {misdemeanours
            .filter(
              (m) =>
                !selectedMisdemeanour || m.misdemeanour === selectedMisdemeanour
            )
            .map((misdemeanour, index) => (
              <tr key={index}>
                <td>{misdemeanour.citizenId}</td>
                <td>{misdemeanour.date}</td>
                <td>
                  {misdemeanour.misdemeanour}
                  {emojiMap[misdemeanour.misdemeanour]}
                </td>
                <td>
                  <img
                    src={`https://picsum.photos/140/70?random=${index}`}
                    alt={`Random ${index}`}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Misdemeanour;
