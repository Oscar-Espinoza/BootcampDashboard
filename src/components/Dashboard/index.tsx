import React, { useState, useRef, Dispatch, SetStateAction, ChangeEvent } from "react";
import {
  Container,
  FlexPublish,
  FlexTdInside,
  PrincipalTitle,
  StyleDashboard,
  StyleHoverTd,
  StyleTable,
  StyleTr,
  StyledSelect,
  StyledSelectStatus,
  UserSearchBar,
  FormContainer,
  FormContent,
  Label,
  TextArea,
  RadioContainer,
  RadioInput,
  SubmitButton,
  StyledTh,
  DeleteAllButton,
  ButtonsContainer,
  UserLink,
} from "./styles";
import Percentage from "../Percentage";
import Publish from "../Publish";
import { User } from "../../models/types";
import { useRouter } from "next/router";
import Add from "../Add";
import Modal from "../Modal";
import TrashCan from "../TrashCan";

type FormProps = {
  userIndex: number,
  users: User[],
  setUsers: Dispatch<SetStateAction<User[]>>,
  handleCloseModal: () => void,
}

const AddFeedbackForm = ({userIndex, users, setUsers, handleCloseModal}: FormProps) => {
  const user = users[userIndex];
  const [formValues, setformValues] = useState({
    description: user.feedBack.description,
    accepted: user.feedBack.accepted,
  })

  const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setformValues({
      ...formValues,
      [e.target.name]: e.target.name === 'accepted' ? e.target.value === 'yes' : e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUsers = [...users];
    newUsers[userIndex].feedBack = {
      ...formValues
    };
    setUsers(newUsers);
    setformValues({
      description: '',
      accepted: false,
    })
    handleCloseModal();
  }
  
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormContent>
        <Label htmlFor="description">Description:</Label>
        <TextArea id="description" name="description" rows={4} value={formValues.description || ""} onChange={handleFormChange}/>

        <Label>Accepted:</Label>
        <RadioContainer>
          <RadioInput type="radio" id="yes" name="accepted" value="yes" checked={formValues.accepted === true} onChange={handleFormChange}/>
          <label htmlFor="yes">Yes</label>
        </RadioContainer>
        <RadioContainer>
          <RadioInput type="radio" id="no" name="accepted" value="no" checked={formValues.accepted === false} onChange={handleFormChange}/>
          <label htmlFor="no">No</label>
        </RadioContainer>
      </FormContent>

      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  );
};
  

const usersMock: User[] = [
  {
    name: "Federico Leiva",
    email: "juansegundo@email.com",
    revisor: "Tomas de Matos",
    status: "completed",
    statusPercentage: 100,
    challenge: "Crypto Challenge 1",
    seats: "Internal Project",
    feedBack: {
      description: "",
      accepted: null
    },
  },
  {
    name: "Juan Segundo",
    email: "juansegundo@gmail.com",
    revisor: "Caterina Aracil",
    status: "completed",
    statusPercentage: 100,
    challenge: "Crypto Challenge 2",
    seats: "Internship",
    feedBack: {
      description: "",
      accepted: null
    },
  },
  {
    name: "Federico Leiva",
    email: "juansegundo2@email.com",
    revisor: "Tomas de Matos",
    status: "completed",
    statusPercentage: 100,
    challenge: "Crypto Challenge 3",
    seats: "Internship",
    feedBack: {
      description: "",
      accepted: null
    },
  },
  {
    name: "Oscar",
    email: "juansegundo3@gmail.com",
    revisor: "Martin Russo",
    status: "completed",
    statusPercentage: 100,
    challenge: "Crypto Challenge 4",
    seats: "Shadowing",
    feedBack: {
      description: "",
      accepted: null
    },
  },
];

const Dashboard = () => {
  const [users, setUsers] = useState(usersMock)
  const [sortField, setSortField] = useState<keyof User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const [searchQuery, setSearchQuery] = React.useState("");

  const [statusFilter, setStatusFilter] = useState<number | null>(null);

  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const reviewers = ["Tomas de Matos", "Caterina Aracil", "Martin Russo"];

  const seats = ["Not set", "Shadowing", "Internship", "Internal Project"];

  const statusOptions = [100, 80, 50, 25];

  const handleClick = (value: string, name: string) => {
    navigator.clipboard.writeText(value);
    alert(`You have copy the ${name}`);
  };

  const handleSort = (field: string) => {
    setSortDirection(
      sortField === field && sortDirection === "asc" ? "desc" : "asc"
    );
    setSortField(field as keyof User);
  };

  const handleLinkClick = () => {
    router.push("/challenges");
  };

  const filterUsers = (users: User[]) => {
    if (statusFilter === null || statusFilter === -1) {
      return users;
    }
    return users.filter((user) => user.statusPercentage === statusFilter);
  };

  const trimText = (text: string) => {
    if (text.length <= 10) {
      return text;
    };
    const trimmedText = text.substring(0, 10) + '...';
    return trimmedText;
  }

  const handleDeleteUser = (UserIndex: number) => {
    const newUsers = users.filter((user, index) => index !== UserIndex);
    setUsers(newUsers);
  }

  const handleDeleteAllUsers = () => {
    setUsers([]);
  }

  const sortedUsers = [...users].sort((a: User, b: User) => {
    if (!sortField) return 0;
    if (sortField === "status") {
      return sortDirection === "asc"
        ? a.statusPercentage - b.statusPercentage
        : b.statusPercentage - a.statusPercentage;
    } else {
      return sortDirection === "asc"
        ? a[sortField]!.toString().localeCompare(b[sortField]!.toString())
        : b[sortField]!.toString().localeCompare(a[sortField]!.toString());
    }
  });

  return (
    <Container>
      <PrincipalTitle>Dashboard</PrincipalTitle>
      <ButtonsContainer>
        <UserSearchBar
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="🔍 Search by name"
        />
        <DeleteAllButton
          onClick={handleDeleteAllUsers}
          >Delete all</DeleteAllButton>
      </ButtonsContainer>
      <StyleDashboard>
        <StyleTable>
          <thead>
            <StyleTr bold={true}>
              <th onClick={() => handleSort("name")} style={{color: '#6229FF'}}>User</th>
              <th style={{color: '#6229FF'}}>E-mail</th>
              <th style={{color: '#6229FF'}}>Phone</th>
              <th onClick={() => handleSort("challenge")} style={{color: '#6229FF'}}>Challenge</th>
              <th onClick={() => handleSort("revisor")} style={{color: '#6229FF'}}>Reviewer</th>
              <th style={{color: '#6229FF'}}>Feedback</th>
              <th onClick={() => handleSort("seats")} style={{color: '#6229FF'}}>Seats</th>
              <StyledTh>
                <th style={{color: '#6229FF'}}> Status</th>
                <StyledSelectStatus
                  onChange={(event) =>
                    setStatusFilter(Number(event.target.value))
                  }
                  defaultValue={-1}
                >
                  <option value={-1}>All</option>
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}%
                    </option>
                  ))}
                </StyledSelectStatus>
              </StyledTh>
            </StyleTr>
          </thead>
          <tbody>
            {filterUsers(sortedUsers)
              .filter((user) =>
                user.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((user, index) => (
                <StyleTr key={user.email}>
                  <td>
                    <UserLink href='/profile'>
                      {user.name.length > 10
                        ? trimText(user.name)
                        : user.name}
                    </UserLink>
                  </td>
                  <StyleHoverTd
                    title={user.email}
                    onClick={() => handleClick(user.email, "email")}                    
                  >
                    {trimText(user.email)}
                  </StyleHoverTd>
                  <StyleHoverTd>+5411324234</StyleHoverTd>
                  <StyleHoverTd
                    onClick={handleLinkClick}
                    style={{ cursor: "pointer" }}
                  >
                    Crypto Challenge
                  </StyleHoverTd>
                  <td>
                    <FlexTdInside boolean={true}>
                      <StyledSelect
                        defaultValue={user.revisor || "Not set"}
                      >
                        {["Not set", ...reviewers].map((revisor) => (
                          <option key={revisor} value={revisor}>
                            {revisor}
                          </option>
                        ))}
                      </StyledSelect>
                    </FlexTdInside>
                  </td>
                  <td>
                    <FlexTdInside status={user.status} boolean={true}>
                      {user.feedBack.description === ""
                        ? <>Not set <Add disabled={!(user.status === "completed")} onClick={() =>{
                          setModalContent(<AddFeedbackForm userIndex={index} users={users} setUsers={setUsers} handleCloseModal={handleCloseModal}/>)
                          handleOpenModal()
                        }} /></>
                        : <>{trimText(user.feedBack.description)}</>}
                    </FlexTdInside>
                  </td>
                  <td>
                    <FlexTdInside status={user.status} boolean={true}>
                      <StyledSelect
                        defaultValue={user.seats || "Not set"}
                        disabled={!(user.status === "completed")}
                      >
                        {seats.map((seat) => (
                          <option key={seat} value={seat}>
                            {seat}
                          </option>
                        ))}
                      </StyledSelect>
                    </FlexTdInside>
                  </td>
                  <td>
                    <FlexTdInside boolean={false}>
                      <Percentage
                        status={user.status}
                        number={user.statusPercentage}
                      />
                    </FlexTdInside>
                  </td>
                  <td>
                    <FlexPublish>
                      <Publish number={user.status === "completed" ? 1 : 0} />
                    </FlexPublish>
                  </td>
                  <td>
                    <TrashCan onClick={() => handleDeleteUser(index)}/>
                  </td>
                </StyleTr>
              ))}
          </tbody>
        </StyleTable>
      </StyleDashboard>

      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        {modalContent}
      </Modal>
    </Container>
  );
}

export default Dashboard;
