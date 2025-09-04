import React, { useEffect, useState } from 'react';
import { useResponsiveGrid } from '../hooks/useResponsiveGrid';

interface GridProps {
	columns: string; // "48 200 500" のような文字列
	rows: string; // "100 500" のような文字列
	mobileColumns?: string; // モバイル用のカラムサイズ
	mobileRows?: string; // モバイル用のロウサイズ
	gap?: number;
	mobileGap?: number; // モバイル用のギャップ
	isMobile?: boolean;
	className?: string;
	children?: React.ReactNode;
	style?: React.CSSProperties;
}

/**
 * レスポンシブグリッドコンポーネント
 * 使用例:
 * <ResponsiveGrid columns="150 300 150" rows="80 200 80" gap={16}>
 *   {children}
 * </ResponsiveGrid>
 */
export const ResponsiveGrid: React.FC<GridProps> = ({
	columns,
	rows,
	mobileColumns,
	mobileRows,
	gap = 16,
	mobileGap,
	isMobile = false,
	className = '',
	children,
	style = {},
}) => {
	const { grid } = useResponsiveGrid();
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsSmallScreen(window.innerWidth < 768);
		};

		checkScreenSize();
		window.addEventListener('resize', checkScreenSize);
		return () => window.removeEventListener('resize', checkScreenSize);
	}, []);

	// モバイル時は専用の設定を使用
	const shouldUseMobile = isSmallScreen || isMobile;
	const finalColumns = shouldUseMobile && mobileColumns ? mobileColumns : columns;
	const finalRows = shouldUseMobile && mobileRows ? mobileRows : rows;
	const finalGap = shouldUseMobile && mobileGap !== undefined ? mobileGap : gap;

	const gridStyles = grid(finalColumns, finalRows, finalGap, shouldUseMobile);

	return (
		<div
			className={className}
			style={{
				...gridStyles,
				...style,
			}}
		>
			{children}
		</div>
	);
};

interface GridItemProps {
	column: number;
	row: number;
	columnSpan?: number;
	rowSpan?: number;
	zIndex?: number;
	className?: string;
	children?: React.ReactNode;
	style?: React.CSSProperties;
}

/**
 * グリッドアイテムコンポーネント
 * 使用例:
 * <GridItem column={1} row={1} columnSpan={2} zIndex={10}>
 *   コンテンツ
 * </GridItem>
 */

export const GridItem: React.FC<GridItemProps> = ({
	column,
	row,
	columnSpan = 1,
	rowSpan = 1,
	zIndex,
	className = '',
	children,
	style = {},
}) => {
	const { item } = useResponsiveGrid();
	const itemStyles = item(column, row, columnSpan, rowSpan, zIndex);

	return (
		<div
			className={className}
			style={{
				...itemStyles,
				...style,
			}}
		>
			{children}
		</div>
	);
};
