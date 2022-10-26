package hichain_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "hichain/testutil/keeper"
	"hichain/testutil/nullify"
	"hichain/x/hichain"
	"hichain/x/hichain/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.HichainKeeper(t)
	hichain.InitGenesis(ctx, *k, genesisState)
	got := hichain.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
