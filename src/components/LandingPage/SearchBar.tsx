import React, { useState, ChangeEvent } from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

interface IProps {
    handleGetInputValue: (e?: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: 'auto',
            },
        },
        searchIcon: {
            width: theme.spacing(7),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 7),
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: 200,
            },
        },
    }),
);

export const SearchBar: React.FC<IProps> = (props) => {
    const classes = useStyles()

    const handleUpdateTextFromInput = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        props.handleGetInputValue(e)
    }

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                onChange={
                    (e) => {
                        handleUpdateTextFromInput(e)
                        console.log(e.target.value)
                    }
                }
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    )
}

export default SearchBar;