import { Text } from "react-native";

function MealDetailScreen({ route }) {
  const { mealId } = route.params;

  return <Text>This is the Meal Detail screen ({mealId})</Text>;
}

export default MealDetailScreen;
