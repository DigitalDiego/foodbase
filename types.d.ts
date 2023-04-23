export interface IData {
  id: string;
  text: string;
}

export interface IRecipe {
  author: string;
  authorId: string;
  created_at: string;
  description: string;
  id: number;
  image: string;
  ingredients: [string];
  instructions: [string];
  title: string;
}
