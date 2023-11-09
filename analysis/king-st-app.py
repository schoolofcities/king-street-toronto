import os
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go

# get the path to the data, not in the same location as the jupyter notebook
# pathName = os.path.abspath(os.getcwd()) + "\\city-of-toronto-data\\"

# fn_turn_restrict1718 = r"i0456_king_st_tmc_turn_restrictions2017_2018.csv"
# fn_turn_restrict1923 = r"i0456_king_st_tmc_turn_restrictions2019_2023.csv"
# fn_intersections = r"intersections_10-20.csv"

# create dataframes from csv
df_turn_restrict1718 = pd.read_csv(r"C:\Users\Q\Documents\UofT School of Cities\king-street-toronto\analysis\city-of-toronto-data\i0456_king_st_tmc_turn_restrictions2017_2018_john.csv", parse_dates=["dt_hourly"])
df_turn_restrict1923 = pd.read_csv(r"C:\Users\Q\Documents\UofT School of Cities\king-street-toronto\analysis\city-of-toronto-data\i0456_king_st_tmc_turn_restrictions2019_2023_john.csv", parse_dates=["dt_hourly"])
df_intersections = pd.read_csv(r"C:\Users\Q\Documents\UofT School of Cities\king-street-toronto\analysis\city-of-toronto-data\intersections_john.csv")

# set dtypes
df_turn_restrict1718['e_thru_vol'] = df_turn_restrict1718['e_thru_vol'].apply(np.int64)
df_turn_restrict1923['e_left_vol'] = df_turn_restrict1923['e_left_vol'].astype('Int64')
df_turn_restrict1923['w_right_vol'] = df_turn_restrict1923['w_right_vol'].astype('Int64')

# merge to get intersection name
df_2017_2018 = pd.merge(df_turn_restrict1718, df_intersections[["intersection_uid", "intersection_name"]], on="intersection_uid")
df_2019_2023 = pd.merge(df_turn_restrict1923, df_intersections[["intersection_uid", "intersection_name"]], on="intersection_uid")

# create date and hour columns
df_2017_2018["date"] = df_2017_2018["dt_hourly"].apply(lambda x: x.date())
df_2017_2018["hour"] = df_2017_2018["dt_hourly"].apply(lambda x: x.hour)
df_2019_2023["date"] = df_2019_2023["dt_hourly"].apply(lambda x: x.date())
df_2019_2023["hour"] = df_2019_2023["dt_hourly"].apply(lambda x: x.hour)


titles_dict = {
    10 : "King / Bathurst, EW Traffic Volumes",
    11 : "King / Portland, EW Traffic Volumes",
    12 : "King / Spadina, EW Traffic Volumes",
    13 : "King / Peter, EW Traffic Volumes",
    14 : "King / Simcoe, EW Traffic Volumes",
    15 : "King / University, EW Traffic Volumes",
    16 : "King / York, EW Traffic Volumes",
    17 : "King / Bay, EW Traffic Volumes",
    18 : "King / Yonge, EW Traffic Volumes",
    19 : "King / Church, EW Traffic Volumes",
    20 : "King / Jarvis, EW Traffic Volumes", 
    32 : "King / John, EW Traffic Volumes"
}

intersections_dict = {
    10 : "King / Bathurst",
    11 : "King / Portland",
    12 : "King / Spadina",
    13 : "King / Peter",
    14 : "King / Simcoe",
    15 : "King / University",
    16 : "King / York",
    17 : "King / Bay",
    18 : "King / Yonge",
    19 : "King / Church",
    20 : "King / Jarvis",
    32 : "King / John"
}

labels_dict = {
    10 : { # King / Bathurst
        "e_thru_vol" : "E Thru Traffic *", 
        "e_left_vol" : "E Left Turns *", 
        "e_right_vol" : "E Right Turns", 
        "w_thru_vol" : "W Thru Traffic *", 
        "w_left_vol": "W Left Turns", 
        "w_right_vol" : "W Right Turns"
        },
    11 : { # King / Portland
        "e_thru_vol" : "E Thru Traffic *", 
        "e_left_vol" : "E Left Turns *", 
        "e_right_vol" : "E Right Turns", 
        "w_thru_vol" : "W Thru Traffic *", 
        "w_left_vol": "W Left Turns *", 
        "w_right_vol" : "W Right Turns"
        },
    12 : { # King / Spadina
        "e_thru_vol" : "E Thru Traffic *", 
        "e_left_vol" : "E Left Turns *", 
        "e_right_vol" : "E Right Turns", 
        "w_thru_vol" : "W Thru Traffic *", 
        "w_left_vol": "W Left Turns *", 
        "w_right_vol" : "W Right Turns"
        },
    13 : { # King / Peter
        "e_thru_vol" : "E Thru Traffic *", 
        "e_left_vol" : "E Left Turns *", 
        "e_right_vol" : "E Right Turns", 
        "w_thru_vol" : "W Thru Traffic *", 
        "w_left_vol": "W Left Turns *", 
        "w_right_vol" : "W Right Turns"
        },
    14 : { # King / Simcoe
        "e_thru_vol" : "E Thru Traffic", 
        "e_left_vol" : "E Left Turns *", 
        "e_right_vol" : "E Right Turns", 
        "w_thru_vol" : "W Thru Traffic", 
        "w_left_vol": "W Left Turns", 
        "w_right_vol" : "W Right Turns"
        },
    15 : { # King / University
        "e_thru_vol" : "E Thru Traffic *", 
        "e_left_vol" : "E Left Turns *", 
        "e_right_vol" : "E Right Turns", 
        "w_thru_vol" : "W Thru Traffic *", 
        "w_left_vol": "W Left Turns *", 
        "w_right_vol" : "W Right Turns"
        },
    16 : { # King / York
        "e_thru_vol" : "E Thru Traffic", 
        "e_left_vol" : "E Left Turns", 
        "e_right_vol" : "E Right Turns", 
        "w_thru_vol" : "W Thru Traffic", 
        "w_left_vol": "W Left Turns *", 
        "w_right_vol" : "W Right Turns"
        },
    17 : { # King / Bay
        "e_thru_vol" : "E Thru Traffic", 
        "e_left_vol" : "E Left Turns *", 
        "e_right_vol" : "E Right Turns", 
        "w_thru_vol" : "W Thru Traffic", 
        "w_left_vol": "W Left Turns *", 
        "w_right_vol" : "W Right Turns"
        },
    18 : { # King / Yonge
        "e_thru_vol" : "E Thru Traffic *", 
        "e_left_vol" : "E Left Turns *", 
        "e_right_vol" : "E Right Turns", 
        "w_thru_vol" : "W Thru Traffic *", 
        "w_left_vol": "W Left Turns *", 
        "w_right_vol" : "W Right Turns"
        },
    19 : { # King / Church
        "e_thru_vol" : "E Thru Traffic *", 
        "e_left_vol" : "E Left Turns *", 
        "e_right_vol" : "E Right Turns", 
        "w_thru_vol" : "W Thru Traffic *", 
        "w_left_vol": "W Left Turns *", 
        "w_right_vol" : "W Right Turns"
        },
    20 : { # King / Jarvis
        "e_thru_vol" : "E Thru Traffic *", 
        "e_left_vol" : "E Left Turns", 
        "e_right_vol" : "E Right Turns", 
        "w_thru_vol" : "W Thru Traffic *", 
        "w_left_vol": "W Left Turns *", 
        "w_right_vol" : "W Right Turns"
        }, 
    32 : { # King / John
        "e_thru_vol" : "E Thru Traffic", 
        "e_left_vol" : "E Left Turns *", 
        "e_right_vol" : "E Right Turns", 
        "w_thru_vol" : "W Thru Traffic", 
        "w_left_vol": "W Left Turns *", 
        "w_right_vol" : "W Right Turns"
        }
}

# Taxi Masks
TaxiMask1 = (df_2017_2018["hour"] >= 5) & (df_2017_2018["hour"] < 22)
df_2017_2018_nt = df_2017_2018[TaxiMask1].copy()

TaxiMask2 = (df_2019_2023["hour"] >= 5) & (df_2019_2023["hour"] < 22)
df_2019_2023_nt = df_2019_2023[TaxiMask2].copy()


# Concatenating the two dataframes
df_all_nt = pd.concat([df_2017_2018_nt, df_2019_2023_nt])

allmvmt = ["e_thru_vol", "e_left_vol", "e_right_vol", "w_thru_vol", "w_left_vol", "w_right_vol"]


resultsall = df_all_nt[["date", "intersection_uid", "intersection_name"] + allmvmt].groupby(['date', 'intersection_uid', 'intersection_name']).aggregate("sum")
resultsalli = resultsall.reset_index()
resultsalli["datet"] = pd.to_datetime(resultsalli["date"])

## additional date-related columns
# resultsalli["year"] = resultsalli["datet"].dt.year
# resultsalli["doy"] = resultsalli["datet"].dt.dayofyear
# resultsalli["date"] = resultsalli["datet"].dt.date
# resultsalli[resultsalli["intersection_uid"] == 10]

# from jupyter_dash import JupyterDash
from dash import Dash, dcc, html, Input, Output#, jupyter_dash

# Build App
app = Dash("King")
app.layout = html.Div([
    # html.H1("King St JupyterDash Test"),
    dcc.Graph(id='graph'),
    html.Label([
        "Intersection",
        dcc.Dropdown(
            id='intersection-dropdown', clearable=False,
            value='10', options=[
                {'label': intersections_dict[i], 'value': i}
                for i in intersections_dict
            ])
    ]),
])

# Define callback to update graph
@app.callback(
    Output('graph', 'figure'),
    [Input("intersection-dropdown", "value")]
)

def update_figure(input):
    r = resultsalli[resultsalli["intersection_uid"] == input]
    r = r.reset_index()
    r["datet"] = pd.to_datetime(r["date"])

    fig = px.scatter(
        r,
        x="datet", 
        y=["e_thru_vol", "e_left_vol", "e_right_vol", "w_thru_vol", "w_left_vol", "w_right_vol"],
        labels={
            "datet" : "Date", 
            "value" : "Traffic Volume", 
            "variable" : "Movement"}, 
        trendline="lowess", 
        trendline_options=dict(frac=0.3),
        height=600,
        title=titles_dict[input])
    
    fig.for_each_trace(lambda t: t.update(name = labels_dict[input][t.name], 
                                          legendgroup = labels_dict[input][t.name], 
                                          hovertemplate = t.hovertemplate.replace(t.name, labels_dict[input][t.name])))

    fig.update_xaxes(dtick="M1", tickformat="%b\n%Y", ticklabelmode="period")

    return fig

# Run app and display result inline in the notebook
if __name__ == "__main__":
    app.run_server(port=8051)