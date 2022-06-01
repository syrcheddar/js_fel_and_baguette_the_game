import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../ItemTypes";

/**
 * Drag'n drop component
 */
function OwnedItem(props) {
	const [{ isDragging }, dragRef] = useDrag(
		() => ({
			type: ItemTypes.OWNED_ITEM,
			collect: (monitor) => ({
				type: ItemTypes.OWNED_ITEM,
				opacity: monitor.isDragging() ? 0.5 : 1,
			}),
			item: props.item,
		}),
		[]
	);
	const source = props.item.src;
	return (
		<div
			ref={dragRef}
			style={{
				opacity: isDragging ? 0.5 : 1,
				fontSize: 25,
				fontWeight: "bold",
				maxHeight: "100%",
				display: "flex",
				alignItems: "center",
				height: "100%",
			}}
			className="gameItem"
		>
			<div className="gameOwnedItemInfo gameItemInfo">
				<h4>{props.item.name}</h4>
				<h5>{props.item.itemInfo}</h5>
				<div
					style={{ display: "flex", flexDirection: "column" }}
					className="stats"
				>
					{props.item.itemType == "zbran" ? (
						<h6>Požkození: {props.item.minDmg + " - " + props.item.maxDmg}</h6>
					) : (
						""
					)}
					<h6>Matika: {props.item.stats[0]}</h6>
					<h6>Fyzika: {props.item.stats[1]}</h6>
					<h6>Programování: {props.item.stats[2]}</h6>
					<h6>Vůle k životu: {props.item.stats[3]}</h6>
					<h6>"Mozková kapacita": {props.item.stats[4]}</h6>
					<h6>Duchapřítomnost: {props.item.stats[5]}</h6>
					<h6>Cena: {props.item.price} dollar</h6>
				</div>
			</div>
			<img
				src={process.env.PUBLIC_URL + source}
				alt=" "
				style={{ maxHeight: "100%" }}
			/>
		</div>
	);
}
export default OwnedItem;
