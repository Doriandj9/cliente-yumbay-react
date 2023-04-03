import { create } from "zustand";
import app from '../config/configApp';

const useAppConfig = create(()=> ({
    app: app
}))

export {useAppConfig}