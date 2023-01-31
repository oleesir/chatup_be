import userResolvers from "./user";
import { merge } from "lodash";

const resolvers = merge( {}, userResolvers );

export default resolvers;
