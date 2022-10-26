package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreatePost = "create_post"

var _ sdk.Msg = &MsgCreatePost{}

func NewMsgCreatePost(creator string, sYSTakipNo string, aD string, sOYAD string, dOGUMTARIHI string, cINSIYET string, aDRESBILGISI string, tELEFONNUMARASI string, hASTATIPI string, mUAYENEBASLANGICTARIHI string, mUAYENEBITISTARIHI string, tANITURU string, iCD10 string, rECETETARIHI string, rECETENUMARASI string, rECETETURU string, hEKIMKIMLIKNUMARASI string, iLACBARKODU string, iLACADI string, kUTUADETI string, iLACKULLANIMSEKLI string, iLACKULLANIMSAYISI string, iLACKULLANIMDOZU string, iLACKULLANIMPERIYODU string) *MsgCreatePost {
	return &MsgCreatePost{
		Creator:                creator,
		SYSTakipNo:             sYSTakipNo,
		AD:                     aD,
		SOYAD:                  sOYAD,
		DOGUMTARIHI:            dOGUMTARIHI,
		CINSIYET:               cINSIYET,
		ADRESBILGISI:           aDRESBILGISI,
		TELEFONNUMARASI:        tELEFONNUMARASI,
		HASTATIPI:              hASTATIPI,
		MUAYENEBASLANGICTARIHI: mUAYENEBASLANGICTARIHI,
		MUAYENEBITISTARIHI:     mUAYENEBITISTARIHI,
		TANITURU:               tANITURU,
		ICD10:                  iCD10,
		RECETETARIHI:           rECETETARIHI,
		RECETENUMARASI:         rECETENUMARASI,
		RECETETURU:             rECETETURU,
		HEKIMKIMLIKNUMARASI:    hEKIMKIMLIKNUMARASI,
		ILACBARKODU:            iLACBARKODU,
		ILACADI:                iLACADI,
		KUTUADETI:              kUTUADETI,
		ILACKULLANIMSEKLI:      iLACKULLANIMSEKLI,
		ILACKULLANIMSAYISI:     iLACKULLANIMSAYISI,
		ILACKULLANIMDOZU:       iLACKULLANIMDOZU,
		ILACKULLANIMPERIYODU:   iLACKULLANIMPERIYODU,
	}
}

func (msg *MsgCreatePost) Route() string {
	return RouterKey
}

func (msg *MsgCreatePost) Type() string {
	return TypeMsgCreatePost
}

func (msg *MsgCreatePost) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePost) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePost) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
