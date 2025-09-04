import { useMemo } from 'react';

/**
 * fs関数の計算ロジック
 * @param maxSize - 1440pxでのサイズ
 * @param ratio - 縮小率（デフォルト0.75）
 */
export const fs = (maxSize: number, ratio = 0.75): string => {
	const minVw = 768;
	const baseVw = 1440;
	const minSize = maxSize * ratio;

	return `calc(${minSize}px + ${maxSize - minSize} * ((100vw - ${minVw}px) / ${
		baseVw - minVw
	}))`;
};

/**
 * fsm関数の計算ロジック（シンプル版）
 * @param baseSize - デザイン基準のサイズ
 * @param minRatio - 最小画面での縮小率（デフォルト0.8）
 * @param maxRatio - 最大画面での拡大率（デフォルト1.2）
 */
export const fsm = (
	baseSize: number,
	minRatio = 0.8,
	maxRatio = 1.2
): string => {
	const minVw = 320; // 最小モバイル幅
	const maxVw = 767; // 最大モバイル幅
	const minSize = baseSize * minRatio;
	const maxSize = baseSize * maxRatio;

	return `calc(${minSize}px + ${maxSize - minSize} * ((100vw - ${minVw}px) / ${
		maxVw - minVw
	}))`;
};

/**
 * fs-vw関数の計算ロジック
 * @param designSize - 1440pxでのデザインサイズ
 */
export const fsVw = (designSize: number): string => {
	const vwValue = (designSize / 1440) * 100;
	return `${vwValue}vw`;
};

/**
 * レスポンシブグリッドのスタイルを生成するフック
 */
export const useResponsiveGrid = () => {
	/**
	 * グリッドテンプレートを生成
	 * @param columns - カラムサイズの配列
	 * @param rows - ロウサイズの配列
	 * @param gap - ギャップサイズ
	 * @param isMobile - モバイル版かどうか
	 */
	const createGridTemplate = useMemo(() => {
		return (
			columns: number[],
			rows: number[],
			gap: number,
			isMobile = false
		) => {
			const generateSize = isMobile ? fsm : fs;

			return {
				display: 'grid',
				gridTemplateColumns: columns.map((col) => generateSize(col)).join(' '),
				gridTemplateRows: rows.map((row) => generateSize(row)).join(' '),
				gap: generateSize(gap),
			};
		};
	}, []);

	/**
	 * グリッドアイテムの配置を生成
	 * @param column - カラム位置（1始まり）
	 * @param row - ロウ位置（1始まり）
	 * @param columnSpan - カラムスパン数
	 * @param rowSpan - ロウスパン数
	 */
	const createGridItem = useMemo(() => {
		return (
			column: number,
			row: number,
			columnSpan = 1,
			rowSpan = 1,
			zIndex?: number
		) => {
			return {
				gridColumn: `${column} / span ${columnSpan}`,
				gridRow: `${row} / span ${rowSpan}`,
				...(zIndex !== undefined && { zIndex }),
			};
		};
	}, []);

	/**
	 * より簡潔なグリッド定義
	 * 例: grid('48 200 500', '100 500', 20)
	 */
	const grid = useMemo(() => {
		return (columns: string, rows: string, gap = 16, isMobile = false) => {
			const colSizes = columns.split(' ').map(Number);
			const rowSizes = rows.split(' ').map(Number);
			return createGridTemplate(colSizes, rowSizes, gap, isMobile);
		};
	}, [createGridTemplate]);

	/**
	 * より簡潔なアイテム配置
	 * 例: item(1, 1, 2, 1, 10)
	 */
	const item = useMemo(() => {
		return createGridItem;
	}, [createGridItem]);

	return {
		fs,
		fsm,
		fsVw,
		createGridTemplate,
		createGridItem,
		grid,
		item,
	};
};
