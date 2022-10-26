package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "hichain/testutil/keeper"
	"hichain/x/hichain/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.HichainKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
