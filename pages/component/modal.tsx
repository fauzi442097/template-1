import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { FiX } from "react-icons/fi";

const ModalPage = () => {
	const [showModal, setShowModal] = useState({
		base: false,
		sm: false,
		lg: false,
		xl: false,
		fullScreen: false,
	});

	return (
		<>
			<div className="w-full flex flex-row flex-wrap gap-4">
				<div className="bg-white dark:bg-dark-dept-1 dark:border dark:border-[#2B2B40] py-5 px-9 rounded-xl flex-1">
					<p className="text-base font-inter-semibold text-dark">
						{" "}
						Modal Size{" "}
					</p>
					<div className="flex gap-2 flex-row flex-wrap">
						<Button.Primary
							onClick={() =>
								setShowModal((prev: any) => ({ ...prev, base: true }))
							}>
							{" "}
							Modal Default{" "}
						</Button.Primary>
						<Button.Primary
							onClick={() =>
								setShowModal((prev: any) => ({ ...prev, sm: true }))
							}>
							{" "}
							Modal Small{" "}
						</Button.Primary>
						<Button.Primary
							onClick={() =>
								setShowModal((prev: any) => ({ ...prev, lg: true }))
							}>
							{" "}
							Modal Large{" "}
						</Button.Primary>
						<Button.Primary
							onClick={() =>
								setShowModal((prev: any) => ({ ...prev, xl: true }))
							}>
							{" "}
							Modal Xl{" "}
						</Button.Primary>
						<Button.Primary
							onClick={() =>
								setShowModal((prev: any) => ({
									...prev,
									fullScreen: true,
								}))
							}>
							{" "}
							Modal FullScreen{" "}
						</Button.Primary>
					</div>

					<div className="flex flex-col gap-1 my-2">
						<span> Base (default): 500px </span>
						<span> Small (sm): 300px </span>
						<span> Large (lg): 800px </span>
						<span> XL : 1140px </span>
						<span> Fullscreen: Fullscreen </span>
					</div>

					<AnimatePresence>
						{showModal.base && (
							<Modal closeOutside={true} setShowModal={setShowModal}>
								<Modal.Header>
									<h4> Tambah Data </h4>
									<Button.Icon
										onClick={() =>
											setShowModal((prev: any) => ({
												...prev,
												base: false,
											}))
										}
										className="btn-light-primary">
										{" "}
										<FiX />{" "}
									</Button.Icon>
								</Modal.Header>
								<Modal.Body>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Illum quisquam vero quo enim corporis eligendi
									fuga porro, qui consequuntur quasi illo ea minima
									placeat molestiae cupiditate doloribus est nostrum
									sunt repellat perferendis! Modi impedit deserunt
									voluptas qui iste ducimus, nemo repellendus tempora
									neque excepturi, totam quo ut eveniet minima sunt
									quam, a esse velit sapiente nostrum libero? Ad est
									doloribus sunt officia et ab labore earum accusamus
									sint deleniti, eaque accusantium aperiam aliquid
									consequuntur mollitia esse incidunt dolor consectetur
									sit magnam ipsum? Quaerat culpa fuga, quia quibusdam
									minima a est consequatur autem deleniti harum illo
									rerum debitis. Consequuntur, tenetur laborum?
								</Modal.Body>
								<Modal.Footer>
									<Button.Light
										onClick={() =>
											setShowModal((prev: any) => ({
												...prev,
												base: false,
											}))
										}>
										{" "}
										Tutup{" "}
									</Button.Light>
								</Modal.Footer>
							</Modal>
						)}

						{showModal.sm && (
							<Modal
								closeOutside={false}
								setShowModal={setShowModal}
								size="sm">
								<Modal.Header>
									<h4> Tambah Data </h4>
									<Button.Icon
										onClick={() =>
											setShowModal((prev: any) => ({
												...prev,
												sm: false,
											}))
										}
										className="btn-light-primary">
										{" "}
										<FiX />{" "}
									</Button.Icon>
								</Modal.Header>
								<Modal.Body>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Illum quisquam vero quo enim corporis eligendi
									fuga porro, qui consequuntur quasi illo ea minima
									placeat molestiae cupiditate doloribus est nostrum
									sunt repellat perferendis! Modi impedit deserunt
									voluptas qui iste ducimus, nemo repellendus tempora
									neque excepturi, totam quo ut eveniet minima sunt
									quam, a esse velit sapiente nostrum libero? Ad est
									doloribus sunt officia et ab labore earum accusamus
									sint deleniti, eaque accusantium aperiam aliquid
									consequuntur mollitia esse incidunt dolor consectetur
									sit magnam ipsum? Quaerat culpa fuga, quia quibusdam
									minima a est consequatur autem deleniti harum illo
									rerum debitis. Consequuntur, tenetur laborum?
								</Modal.Body>
								<Modal.Footer>
									<Button.Light
										onClick={() =>
											setShowModal((prev: any) => ({
												...prev,
												sm: false,
											}))
										}>
										{" "}
										Tutup{" "}
									</Button.Light>
								</Modal.Footer>
							</Modal>
						)}

						{showModal.lg && (
							<Modal size="lg">
								<Modal.Header>
									<h4> Tambah Data </h4>
									<Button.Icon
										onClick={() =>
											setShowModal((prev: any) => ({
												...prev,
												lg: false,
											}))
										}
										className="btn-light-primary">
										{" "}
										<FiX />{" "}
									</Button.Icon>
								</Modal.Header>
								<Modal.Body>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Illum quisquam vero quo enim corporis eligendi
									fuga porro, qui consequuntur quasi illo ea minima
									placeat molestiae cupiditate doloribus est nostrum
									sunt repellat perferendis! Modi impedit deserunt
									voluptas qui iste ducimus, nemo repellendus tempora
									neque excepturi, totam quo ut eveniet minima sunt
									quam, a esse velit sapiente nostrum libero? Ad est
									doloribus sunt officia et ab labore earum accusamus
									sint deleniti, eaque accusantium aperiam aliquid
									consequuntur mollitia esse incidunt dolor consectetur
									sit magnam ipsum? Quaerat culpa fuga, quia quibusdam
									minima a est consequatur autem deleniti harum illo
									rerum debitis. Consequuntur, tenetur laborum?
								</Modal.Body>
								<Modal.Footer>
									<Button.Light
										onClick={() =>
											setShowModal((prev: any) => ({
												...prev,
												lg: false,
											}))
										}>
										{" "}
										Tutup{" "}
									</Button.Light>
								</Modal.Footer>
							</Modal>
						)}

						{showModal.xl && (
							<Modal size="xl">
								<Modal.Header>
									<h4> Tambah Data </h4>
									<Button.Icon
										onClick={() =>
											setShowModal((prev: any) => ({
												...prev,
												xl: false,
											}))
										}
										className="btn-light-primary">
										{" "}
										<FiX />{" "}
									</Button.Icon>
								</Modal.Header>
								<Modal.Body>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Illum quisquam vero quo enim corporis eligendi
									fuga porro, qui consequuntur quasi illo ea minima
									placeat molestiae cupiditate doloribus est nostrum
									sunt repellat perferendis! Modi impedit deserunt
									voluptas qui iste ducimus, nemo repellendus tempora
									neque excepturi, totam quo ut eveniet minima sunt
									quam, a esse velit sapiente nostrum libero? Ad est
									doloribus sunt officia et ab labore earum accusamus
									sint deleniti, eaque accusantium aperiam aliquid
									consequuntur mollitia esse incidunt dolor consectetur
									sit magnam ipsum? Quaerat culpa fuga, quia quibusdam
									minima a est consequatur autem deleniti harum illo
									rerum debitis. Consequuntur, tenetur laborum?
								</Modal.Body>
								<Modal.Footer>
									<Button.Light
										onClick={() =>
											setShowModal((prev: any) => ({
												...prev,
												xl: false,
											}))
										}>
										{" "}
										Tutup{" "}
									</Button.Light>
								</Modal.Footer>
							</Modal>
						)}

						{showModal.fullScreen && (
							<Modal size="fullscreen">
								<Modal.Header>
									<h4> Tambah Data </h4>
									<Button.Icon
										onClick={() =>
											setShowModal((prev: any) => ({
												...prev,
												fullScreen: false,
											}))
										}
										className="btn-light-primary">
										{" "}
										<FiX />{" "}
									</Button.Icon>
								</Modal.Header>
								<Modal.Body>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Illum quisquam vero quo enim corporis eligendi
									fuga porro, qui consequuntur quasi illo ea minima
									placeat molestiae cupiditate doloribus est nostrum
									sunt repellat perferendis! Modi impedit deserunt
									voluptas qui iste ducimus, nemo repellendus tempora
									neque excepturi, totam quo ut eveniet minima sunt
									quam, a esse velit sapiente nostrum libero? Ad est
									doloribus sunt officia et ab labore earum accusamus
									sint deleniti, eaque accusantium aperiam aliquid
									consequuntur mollitia esse incidunt dolor consectetur
									sit magnam ipsum? Quaerat culpa fuga, quia quibusdam
									minima a est consequatur autem deleniti harum illo
									rerum debitis. Consequuntur, tenetur laborum?
								</Modal.Body>
								<Modal.Footer>
									<Button.Light
										onClick={() =>
											setShowModal((prev: any) => ({
												...prev,
												fullScreen: false,
											}))
										}>
										{" "}
										Tutup{" "}
									</Button.Light>
								</Modal.Footer>
							</Modal>
						)}
					</AnimatePresence>

					<p className="text-sm font-inter-semibold text-dark my-4">
						{" "}
						Props{" "}
					</p>
					<div className="bg-gray-50 my-5 p-5 rounded flex flex-col gap-2 dark:bg-dark-dept-2">
						<span>
							{" "}
							size&lt;string&gt; : Size modal (base|sm|lg|xl|fullscreen){" "}
						</span>
						<span> position&lt;string&gt; : Position modal (center)</span>
						<span>
							{" "}
							closeOutside&lt;boolean&gt; : describe modal is close when
							click outside or not (Optional)
						</span>
						<span>
							{" "}
							setShowModal&lt;function&gt; : Function that close modal
							(Optional){" "}
						</span>
					</div>

					<p className="text-base font-inter-semibold text-dark my-5">
						{" "}
						How To Usage{" "}
					</p>
					<div className="bg-gray-50 my-5 p-5 rounded flex flex-col gap-2 dark:bg-dark-dept-2">
						<code>
							&lt;Modal size=&quot;base|sm|lg|xl|fullscreen&quot;
							position=&quot;center(optional)&quot;
							closeOutside=&quot;false|true&quot;
							setShowModal=&quot;setShowModal&quot;&gt; <br />
							&nbsp;&nbsp;&nbsp; &lt;Modal.Header&gt;
							&lt;/Modal.Header&gt; <br />
							&nbsp;&nbsp;&nbsp; &lt;Modal.Body&gt; &lt;/Modal.Body&gt;{" "}
							<br />
							&nbsp;&nbsp;&nbsp; &lt;Modal.Footer&gt;
							&lt;/Modal.Footer&gt; <br />
							&lt;/Modal&gt;
						</code>
					</div>
				</div>
			</div>
		</>
	);
};

export default ModalPage;
