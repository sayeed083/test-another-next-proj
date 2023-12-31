import FacebookMessage from "@/components/FacebookMessage/FacebookMessage";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Notify from "@/components/Notify/Notify";
import Telegram from "@/components/Telegram/Telegram";
import WhatsappAPK from "@/components/whatsapp/Whatsapp";
import Providers from "@/providers";
import { Toaster } from "react-hot-toast";

const UserLayout = ({ children }) => {
	return (
		<div>
			<Providers>
				<Navbar />
				<FacebookMessage/>
				<Telegram/>
				<WhatsappAPK/>
				<Notify></Notify>
				{children}
				<Footer />
			</Providers>
			<Toaster />
		</div>
	);
};

export default UserLayout;