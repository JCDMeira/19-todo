// type UserType = {
//   name: string,
//   lastName: string,
//   email: string,
// };

// type PropsUserContext = {
//   state: UserType,
//   setState: React.Dispatch<React.SetStateAction<UserType>>,
// };

// const DEFAULT_VALUE = {
//   state: {
//     name: '',
//     lastName: '',
//     email: '',
//   },
//   // eslint-disable-next-line @typescript-eslint/no-empty-function
//   setState: () => {},
// };

// const UserContext = createContext < PropsUserContext > DEFAULT_VALUE;
// const Provider = UserContext.Provider;

// const UserContextProvider: React.FC = ({ children }) => {
//   const [state, setState] = useState(DEFAULT_VALUE.state);

//   return <Provider value={{ state, setState }}>{children}</Provider>;
// };

// const UserConsumer = () => useContext(UserContext);

// export { UserContext, UserContextProvider, UserConsumer };
