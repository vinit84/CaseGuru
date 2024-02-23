// ** MUI Imports
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import {
  ThemeProvider,
  createTheme,
  styled,
  useTheme,
} from "@mui/material/styles";

// Styled component for the triangle shaped background image
const TriangleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

// Styled component for the trophy image
const TrophyImg = styled("img")({
  right: 0,
  bottom: 20,
  height: 200,
  position: "absolute",
});

const Achivement = () => {
  // ** Hook
  const theme = useTheme();

  const imageSrc =
    theme.palette.mode === "light" ? "triangle-light.png" : "triangle-dark.png";

  return (
    <Card sx={{ position: "relative" }}>
      <CardContent>
        <Typography
          variant="h6"
          sx={{ letterSpacing: "0.25px", fontFamily: "Gilroy" }}
          className="font-bold"
        >
          Case Guru
        </Typography>
        <Typography variant="body2">Congratulations 🥳</Typography>

        <Typography
          variant="h5"
          className="font-bold"
          sx={{ my: 3.1, color: "primary.main", fontFamily: "Gilroy" }}
        >
          420.8k
        </Typography>
        <button
          type="submit"
          className="font-semibold hover:bg-orange-600 bg-[#FF5612] font-['Gilroy'] border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          VIEW SALES
        </button>
        <TriangleImg alt='triangle background' src={`assets/images/misc/${imageSrc}`} />
        <TrophyImg alt="trophy" src="assets/images/misc/trophy.png" />
      </CardContent>
    </Card>
  );
};

export default Achivement;
