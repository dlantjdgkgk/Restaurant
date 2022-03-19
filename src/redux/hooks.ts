import {
    TypedUseSelectorHook,
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector,
} from 'react-redux'
import { RootState, AppDispatch } from './store'
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
export const useDispatch = () => useReduxDispatch<AppDispatch>()
