package keeper

import (
	"hichain/x/hichain/types"
)

var _ types.QueryServer = Keeper{}
