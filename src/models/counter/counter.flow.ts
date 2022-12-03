import {persist} from "effector-storage/local";
import {$counter} from "./counter.store";

persist({
    store: $counter,
    key: 'counter',
})