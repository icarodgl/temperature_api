import { app } from './main';
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`ouvindo na porta ${PORT}`));
