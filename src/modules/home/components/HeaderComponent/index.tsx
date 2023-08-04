import React from 'react'
import { HeaderTypography, ParentCotainer } from './style'

function HeaderComponent() {
	return (
		<ParentCotainer>
			<HeaderTypography>
				Expense Tracker
			</HeaderTypography>
		</ParentCotainer>
	)
}

export default React.memo(HeaderComponent)