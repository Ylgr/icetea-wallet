import * as types from '../constants/ActionTypes'

export const saveWallet = wallet => ({ type: types.SAVE_WALLET, wallet })
export const changeULType = ulType => ({type: types.CHANGE_UL_TYPE, ulType})
export const changePopup = puNo => ({ type: types.CHANGE_PU, puNo })
// Start for createAccount
export const setStep            = step =>     ({ type: types.SET_STEP, step: step });
export const setPassword        = password => ({ type: types.SET_PASSWORD, password: password });
export const setAccount         = data =>     ({ type: types.SET_ACCOUNT, data: data });
export const setShowPrivateKey  = data =>     ({ type: types.SET_SHOW_PRIVATEKEY, data: data });
export const setConfirmMnemonic = data =>     ({ type: types.SET_CONFIRM_MNEMONIC, data: data });
// golobal
export const setLoading         = data =>     ({ type: types.SET_GLOBAL_LOADING , data: data });