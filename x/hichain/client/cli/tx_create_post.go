package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"hichain/x/hichain/types"
)

var _ = strconv.Itoa(0)

func CmdCreatePost() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-post [sys-takip-no] [ad] [soyad] [dogum-tarihi] [cinsiyet] [adres-bilgisi] [telefon-numarasi] [hasta-tipi] [muayene-baslangic-tarihi] [muayene-bitis-tarihi] [tani-turu] [icd-10] [recete-tarihi] [recete-numarasi] [recete-turu] [hekim-kimlik-numarasi] [ilac-barkodu] [ilac-adi] [kutu-adeti] [ilac-kullanim-sekli] [ilac-kullanim-sayisi] [ilac-kullanim-dozu] [ilac-kullanim-periyodu]",
		Short: "Broadcast message createPost",
		Args:  cobra.ExactArgs(23),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argSYSTakipNo := args[0]
			argAD := args[1]
			argSOYAD := args[2]
			argDOGUMTARIHI := args[3]
			argCINSIYET := args[4]
			argADRESBILGISI := args[5]
			argTELEFONNUMARASI := args[6]
			argHASTATIPI := args[7]
			argMUAYENEBASLANGICTARIHI := args[8]
			argMUAYENEBITISTARIHI := args[9]
			argTANITURU := args[10]
			argICD10 := args[11]
			argRECETETARIHI := args[12]
			argRECETENUMARASI := args[13]
			argRECETETURU := args[14]
			argHEKIMKIMLIKNUMARASI := args[15]
			argILACBARKODU := args[16]
			argILACADI := args[17]
			argKUTUADETI := args[18]
			argILACKULLANIMSEKLI := args[19]
			argILACKULLANIMSAYISI := args[20]
			argILACKULLANIMDOZU := args[21]
			argILACKULLANIMPERIYODU := args[22]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreatePost(
				clientCtx.GetFromAddress().String(),
				argSYSTakipNo,
				argAD,
				argSOYAD,
				argDOGUMTARIHI,
				argCINSIYET,
				argADRESBILGISI,
				argTELEFONNUMARASI,
				argHASTATIPI,
				argMUAYENEBASLANGICTARIHI,
				argMUAYENEBITISTARIHI,
				argTANITURU,
				argICD10,
				argRECETETARIHI,
				argRECETENUMARASI,
				argRECETETURU,
				argHEKIMKIMLIKNUMARASI,
				argILACBARKODU,
				argILACADI,
				argKUTUADETI,
				argILACKULLANIMSEKLI,
				argILACKULLANIMSAYISI,
				argILACKULLANIMDOZU,
				argILACKULLANIMPERIYODU,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
