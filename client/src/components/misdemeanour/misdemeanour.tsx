import { useEffect, useState } from "react";

type MisdemeanourProps = {
  citizenId: number;
  date: string;
  misdemeanour: string;
};

const Misdemeanour: React.FC = () => {
  const [misdemeanours, setMisdemeanours] = useState<MisdemeanourProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/misdemeanours/5"
        );
        const data = await response.json();
        setMisdemeanours(data.misdemeanours);
      } catch (error) {
        // error code to follow
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <table className="misdemeanour__table">
        <thead>
          <tr>
            <th>Citizen ID</th>
            <th>Date</th>
            <th>Misdemeanour</th>
            <th>Punishment Idea</th>
          </tr>
        </thead>
        <tbody>
          {misdemeanours.map((misdemeanour, index) => (
            <tr key={index}>
              <td>{misdemeanour.citizenId}</td>
              <td>{misdemeanour.date}</td>
              <td>
                {misdemeanour.misdemeanour}
                {misdemeanour.misdemeanour === "rudeness" && " 🤪"}
                {misdemeanour.misdemeanour === "lift" && " 🗣"}
                {misdemeanour.misdemeanour === "vegetables" && " 🥗"}
                {misdemeanour.misdemeanour === "united" && " 😈"}
              </td>
              <td>data to follow</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Misdemeanour;
