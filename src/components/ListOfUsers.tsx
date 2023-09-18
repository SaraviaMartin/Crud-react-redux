import {
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
} from "@tremor/react";

const users: {
	id: string;
	name: string;
	email: string;
	github: string;
}[] = [
	{
		id: "1",
		name: "Peter Doe",
		email: "peter@gmail.com",
		github: "peterdoe",
	},
	{
		id: "2",
		name: "Papua Ioe",
		email: "papua@gmail.com",
		github: "papua ioe",
	},
	{
		id: "3",
		name: "Paula Susan",
		email: "paula@gmail.com",
		github: "paula",
	},
	{
		id: "4",
		name: "Sharon sanchez",
		email: "sharon@gmail.com",
		github: "sharon",
	},
];

export function ListOfUsers() {
	return (
		<Card>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell>Id</TableHeaderCell>
						<TableHeaderCell>Nombre</TableHeaderCell>
						<TableHeaderCell>Email</TableHeaderCell>
						<TableHeaderCell>Acciones</TableHeaderCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((item) => (
						<TableRow key={item.name}>
							<TableCell>{item.id}</TableCell>
							<TableCell style={{ display: "flex", alignItems: "center" }}>
								<img
									style={{
										width: "32px",
										height: "32px",
										borderRadius: "50%",
										marginRight: "8px",
									}}
									src={`https://unavatar.io/github/${item.github}`}
									alt="{item.name}"
								/>
								{item.name}
							</TableCell>
							<TableCell>{item.email}</TableCell>
							<TableCell>{item.github}</TableCell>
							<TableCell>
								<button>Editar</button>
								<button>Eliminar</button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
