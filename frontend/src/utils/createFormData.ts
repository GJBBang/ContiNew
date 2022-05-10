import { HouseInfo } from "src/types/houseInfo";

function createFormData(houseInfo: HouseInfo) {
	const formData = new FormData();
	const optionList = houseInfo.options.map((option) => +option);
	const article = {
		sido_name: houseInfo.sido,
		gungu_name: houseInfo.sigungu,
		dong_name: houseInfo.bname,
		jibun_address: houseInfo.jibunAddress,
		address_detail: houseInfo.addressDetail,
		latitude: houseInfo.latitude,
		longitude: houseInfo.longitude,
		floor: +houseInfo.floor,
		sale_type: houseInfo.saleType,
		house_type: houseInfo.houseType,
		deposit: +houseInfo.deposit,
		monthly_rent: +houseInfo.monthlyRent,
		maintenance_fee: +houseInfo.maintenanceFee,
		maintenance_detail: houseInfo.maintenanceDetail,
		period: +houseInfo.period,
		description: houseInfo.description,
		options: optionList,
		contract_type: houseInfo.contractType,
	};

	console.log(article);
	formData.append("house", new Blob([JSON.stringify(article)], { type: "application/json" })),
		houseInfo.images !== null
			? [...houseInfo.images].forEach((file) => formData.append("images", file))
			: formData.append("images", new Blob([]));

	return formData;
}

export default createFormData;
