import { debounce } from "lodash";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SET_STEP2 } from "src/store/contract";
import { ContractType } from "src/types/contractType";
import { Input } from "./Input";
import { Label } from "./Label";
import Signature from "./Signature";
interface Props {
	step: number;
	role: string;
	contractInfo: ContractType;
}
function BuyerInfo({ step, role, contractInfo }: Props) {
	const [disabled, setDisabled] = useState(true);
	const [signatureDisabled, setSignatureDisabled] = useState(true);

	const dispatch = useDispatch();

	const handleBuyerInfoChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target as HTMLInputElement;
		dispatch(SET_STEP2({ ...contractInfo, [name]: value }));
		console.log(name, value);
	}, 500);

	useEffect(() => {
		if (step === 2 && role === "buyer") {
			setDisabled(false);
			setSignatureDisabled(false);
		}
	}, [step]);

	return (
		<>
			<Label>신규 임차인 주소</Label>
			<Input
				disabled={disabled}
				name="buyer_address"
				defaultValue={contractInfo.buyer_address}
				onChange={handleBuyerInfoChange}
			/>
			<Label>신규 임차인 성명</Label>
			<Input
				disabled={disabled}
				name="buyer_name"
				defaultValue={contractInfo.buyer_name}
				onChange={handleBuyerInfoChange}
			/>
			<Label>신규 임차인 생년월일</Label>
			<Input
				disabled={disabled}
				name="buyer_birth"
				type="date"
				defaultValue={contractInfo.buyer_birth}
				onChange={handleBuyerInfoChange}
			/>
			<Label>신규 임차인 전화</Label>
			<Input
				disabled={disabled}
				name="buyer_phone"
				defaultValue={contractInfo.buyer_phone}
				onChange={handleBuyerInfoChange}
			/>
			<Label>서명</Label>
			<Signature signatureDisabled={signatureDisabled} role={role} />
		</>
	);
}

export default BuyerInfo;
