import { Request, Response} from 'express';

export const renderHomePage = (req: Request, res: Response) => {
res.json({data: "Welcome to the homepage"})
}